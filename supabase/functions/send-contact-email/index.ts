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
    const adminEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.geometric-bg {
  background-color: #0a0c10;
  background-image: 
    linear-gradient(30deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(150deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(30deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(150deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(60deg, rgba(26, 31, 42, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(26, 31, 42, 0.5) 75%),
    linear-gradient(60deg, rgba(26, 31, 42, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(26, 31, 42, 0.5) 75%);
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
</style>
</head>
<body class="geometric-bg" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 30px;">
<div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #0f1218 0%, #0a0c10 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(23, 111, 211, 0.3); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
<div style="background: linear-gradient(135deg, #176fd3 0%, #0d4a8f 100%); padding: 35px; text-align: center;">
<h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px;">Nova zprava z webu</h1>
<p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">autoservisbp.cz</p>
</div>
<div style="padding: 35px;">
<div style="margin-bottom: 24px;">
<div style="font-weight: 600; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Jmeno</div>
<div style="color: #ffffff; font-size: 16px; padding: 14px 18px; background: linear-gradient(135deg, #151821 0%, #0f1218 100%); border-radius: 10px; border-left: 3px solid #176fd3;">${name}</div>
</div>
<div style="margin-bottom: 24px;">
<div style="font-weight: 600; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">E-mail</div>
<div style="color: #ffffff; font-size: 16px; padding: 14px 18px; background: linear-gradient(135deg, #151821 0%, #0f1218 100%); border-radius: 10px; border-left: 3px solid #176fd3;"><a href="mailto:${email}" style="color: #5ba3f5; text-decoration: none;">${email}</a></div>
</div>
${phone ? `<div style="margin-bottom: 24px;">
<div style="font-weight: 600; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Telefon</div>
<div style="color: #ffffff; font-size: 16px; padding: 14px 18px; background: linear-gradient(135deg, #151821 0%, #0f1218 100%); border-radius: 10px; border-left: 3px solid #176fd3;"><a href="tel:${phone}" style="color: #5ba3f5; text-decoration: none;">${phone}</a></div>
</div>` : ''}
<div style="background: linear-gradient(135deg, #151821 0%, #0f1218 100%); border: 1px solid rgba(23, 111, 211, 0.2); border-radius: 12px; padding: 24px; margin-top: 28px;">
<div style="font-weight: 600; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;">Zprava</div>
<p style="margin: 0; white-space: pre-wrap; color: #e5e7eb; line-height: 1.7; font-size: 15px;">${message}</p>
</div>
</div>
<div style="background: #0a0c10; padding: 24px; text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid rgba(23, 111, 211, 0.15);">
Odeslano z kontaktniho formulare na webu autoservisbp.cz
</div>
</div>
</body>
</html>`;

    // Potvrzovaci email pro odesilatele
    const confirmationEmailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.geometric-bg {
  background-color: #0a0c10;
  background-image: 
    linear-gradient(30deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(150deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(30deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(150deg, #1a1f2a 12%, transparent 12.5%, transparent 87%, #1a1f2a 87.5%, #1a1f2a),
    linear-gradient(60deg, rgba(26, 31, 42, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(26, 31, 42, 0.5) 75%),
    linear-gradient(60deg, rgba(26, 31, 42, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(26, 31, 42, 0.5) 75%);
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
</style>
</head>
<body class="geometric-bg" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 30px;">
<div style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #0f1218 0%, #0a0c10 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(23, 111, 211, 0.3); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
<div style="background: linear-gradient(135deg, #176fd3 0%, #0d4a8f 100%); padding: 40px; text-align: center;">
<h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px;">Autoservis BP</h1>
<p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Profesionalni pece o Vase vozidlo</p>
</div>
<div style="padding: 40px;">
<div style="text-align: center; margin-bottom: 30px;">
<div style="width: 80px; height: 80px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);">
<span style="font-size: 40px; line-height: 80px; color: #ffffff;">&#10003;</span>
</div>
<h2 style="color: #ffffff; margin: 0 0 16px 0; font-size: 26px; font-weight: 700;">Dekujeme za Vasi zpravu!</h2>
<p style="color: #9ca3af; line-height: 1.7; margin: 0; font-size: 15px;">Vazeny/a ${name}, Vasi zpravu jsme uspesne prijali a budeme se ji venovat co nejdrive. Obvykle odpovidame do 24 hodin v pracovnich dnech.</p>
</div>
<div style="background: linear-gradient(135deg, #151821 0%, #0f1218 100%); border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 3px solid #176fd3;">
<div style="font-weight: 600; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;">Kopie Vasi zpravy:</div>
<p style="margin: 0; white-space: pre-wrap; color: #e5e7eb; line-height: 1.7; font-size: 15px;">${message}</p>
</div>
<div style="background: linear-gradient(135deg, #176fd3 0%, #0d4a8f 100%); color: #fff; padding: 24px; border-radius: 12px; text-align: center; box-shadow: 0 10px 30px rgba(23, 111, 211, 0.3);">
<p style="margin: 0 0 12px 0; font-size: 14px; opacity: 0.9;">Potrebujete rychlou odpoved?</p>
<a href="tel:+420777124194" style="color: #ffffff; text-decoration: none; font-weight: 700; font-size: 20px;">+420 777 124 194</a>
</div>
</div>
<div style="background: #0a0c10; padding: 30px; text-align: center; color: #9ca3af; font-size: 13px; border-top: 1px solid rgba(23, 111, 211, 0.15);">
<p style="margin: 0 0 6px 0;">S pozdravem,</p>
<p style="margin: 0 0 18px 0; color: #ffffff; font-weight: 600; font-size: 15px;">Tym Autoservis BP</p>
<p style="margin: 0; font-size: 11px; color: #6b7280;">Ve Zlibku 1849/2a, Praha 9 - Horni Pocernice | www.autoservisbp.cz</p>
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
      subject: "Děkujeme za Vaši zprávu - Autoservis BP",
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
