import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    const smtpHost = Deno.env.get("SMTP_HOST")!;
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER")!;
    const smtpPass = Deno.env.get("SMTP_PASS")!;

    console.log(`Connecting to SMTP: ${smtpHost}:${smtpPort}`);

    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    // Email pro autoservis (příjemce zprávy)
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { padding: 30px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .value { color: #333; font-size: 16px; padding: 10px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #f59e0b; }
    .message-box { background: #fff8e1; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-top: 20px; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 Nová zpráva z webu</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Jméno</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-mail</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      ` : ''}
      <div class="message-box">
        <div class="label">Zpráva</div>
        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
    <div class="footer">
      Odesláno z kontaktního formuláře na webu autoservisbp.cz
    </div>
  </div>
</body>
</html>
    `;

    // Potvrzovací email pro odesílatele
    const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .header p { margin: 10px 0 0 0; opacity: 0.9; }
    .content { padding: 30px; }
    .success-icon { text-align: center; font-size: 48px; margin-bottom: 20px; }
    .message { text-align: center; color: #333; line-height: 1.6; }
    .message h2 { color: #1a1a2e; margin-bottom: 15px; }
    .copy-box { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border-left: 3px solid #f59e0b; }
    .copy-label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 10px; }
    .contact-info { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #fff; padding: 20px; border-radius: 8px; text-align: center; margin-top: 25px; }
    .contact-info a { color: #fff; text-decoration: none; font-weight: 600; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔧 Autoservis BP</h1>
      <p>Profesionální péče o vaše vozidlo</p>
    </div>
    <div class="content">
      <div class="success-icon">✅</div>
      <div class="message">
        <h2>Děkujeme za vaši zprávu, ${name}!</h2>
        <p>Vaši zprávu jsme úspěšně přijali a budeme se jí věnovat co nejdříve. Obvykle odpovídáme do 24 hodin v pracovních dnech.</p>
      </div>
      
      <div class="copy-box">
        <div class="copy-label">Kopie vaší zprávy:</div>
        <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
      </div>
      
      <div class="contact-info">
        <p style="margin: 0 0 10px 0;">Potřebujete rychlou odpověď?</p>
        <a href="tel:+420602773877">📞 +420 602 773 877</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">S pozdravem,<br><strong>Tým Autoservis BP</strong></p>
      <p style="margin: 10px 0 0 0; font-size: 11px;">K Cikánce 680, Slaný • www.autoservisbp.cz</p>
    </div>
  </div>
</body>
</html>
    `;

    // Odeslat email adminu
    console.log("Sending admin email...");
    await client.send({
      from: smtpUser,
      to: "info@autoservisbp.cz",
      subject: `Nová zpráva z webu od: ${name}`,
      html: adminEmailHtml,
    });

    // Odeslat potvrzení odesílateli
    console.log("Sending confirmation email...");
    await client.send({
      from: smtpUser,
      to: email,
      subject: "Děkujeme za vaši zprávu - Autoservis BP",
      html: confirmationEmailHtml,
    });

    await client.close();

    console.log("Emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
