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

    // Logo URL
    const logoUrl = "https://wvrdemfhkibcyxlqzrwg.supabase.co/storage/v1/object/public/assets/logo.png";

    // Email pro autoservis (příjemce zprávy)
    const adminEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f1419; margin: 0; padding: 20px;">
<div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.2);">
<div style="background: linear-gradient(135deg, #1e3a5f 0%, #0f1419 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">
<img src="${logoUrl}" alt="Autoservis BP" style="height: 50px; width: auto; margin-bottom: 15px;">
<h1 style="margin: 0; font-size: 22px; color: #ffffff;">Nova zprava z webu</h1>
</div>
<div style="padding: 30px;">
<div style="margin-bottom: 20px;">
<div style="font-weight: 600; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Jmeno</div>
<div style="color: #ffffff; font-size: 16px; padding: 12px 15px; background: rgba(30, 58, 95, 0.5); border-radius: 8px; border-left: 3px solid #3b82f6;">${name}</div>
</div>
<div style="margin-bottom: 20px;">
<div style="font-weight: 600; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">E-mail</div>
<div style="color: #ffffff; font-size: 16px; padding: 12px 15px; background: rgba(30, 58, 95, 0.5); border-radius: 8px; border-left: 3px solid #3b82f6;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></div>
</div>
${phone ? `<div style="margin-bottom: 20px;">
<div style="font-weight: 600; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Telefon</div>
<div style="color: #ffffff; font-size: 16px; padding: 12px 15px; background: rgba(30, 58, 95, 0.5); border-radius: 8px; border-left: 3px solid #3b82f6;"><a href="tel:${phone}" style="color: #60a5fa; text-decoration: none;">${phone}</a></div>
</div>` : ''}
<div style="background: rgba(30, 58, 95, 0.3); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; margin-top: 25px;">
<div style="font-weight: 600; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 12px;">Zprava</div>
<p style="margin: 0; white-space: pre-wrap; color: #e2e8f0; line-height: 1.6;">${message}</p>
</div>
</div>
<div style="background: rgba(15, 20, 25, 0.8); padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(59, 130, 246, 0.2);">
Odeslano z kontaktniho formulare na webu autoservisbp.cz
</div>
</div>
</body>
</html>`;

    // Potvrzovací email pro odesílatele
    const confirmationEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f1419; margin: 0; padding: 20px;">
<div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.2);">
<div style="background: linear-gradient(135deg, #1e3a5f 0%, #0f1419 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(59, 130, 246, 0.3);">
<img src="${logoUrl}" alt="Autoservis BP" style="height: 50px; width: auto; margin-bottom: 15px;">
<p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Profesionalni pece o vase vozidlo</p>
</div>
<div style="padding: 30px;">
<div style="text-align: center; margin-bottom: 25px;">
<div style="width: 70px; height: 70px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
<span style="font-size: 36px; line-height: 70px;">&#10003;</span>
</div>
<h2 style="color: #ffffff; margin: 0 0 15px 0; font-size: 24px;">Dekujeme za vasi zpravu, ${name}!</h2>
<p style="color: #94a3b8; line-height: 1.6; margin: 0;">Vasi zpravu jsme uspesne prijali a budeme se ji venovat co nejdrive. Obvykle odpovidame do 24 hodin v pracovnich dnech.</p>
</div>
<div style="background: rgba(30, 58, 95, 0.3); border-radius: 12px; padding: 20px; margin: 25px 0; border-left: 3px solid #3b82f6;">
<div style="font-weight: 600; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 12px;">Kopie vasi zpravy:</div>
<p style="margin: 0; white-space: pre-wrap; color: #e2e8f0; line-height: 1.6;">${message}</p>
</div>
<div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: #fff; padding: 20px; border-radius: 12px; text-align: center;">
<p style="margin: 0 0 10px 0; font-size: 14px;">Potrebujete rychlou odpoved?</p>
<a href="tel:+420777124194" style="color: #ffffff; text-decoration: none; font-weight: 600; font-size: 18px;">+420 777 124 194</a>
</div>
</div>
<div style="background: rgba(15, 20, 25, 0.8); padding: 25px; text-align: center; color: #94a3b8; font-size: 13px; border-top: 1px solid rgba(59, 130, 246, 0.2);">
<p style="margin: 0 0 5px 0;">S pozdravem,</p>
<p style="margin: 0 0 15px 0; color: #ffffff; font-weight: 600;">Tym Autoservis BP</p>
<p style="margin: 0; font-size: 11px; color: #64748b;">Ve Zlibku 1849/2a, Horni Pocernice | www.autoservisbp.cz</p>
</div>
</div>
</body>
</html>`;

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
