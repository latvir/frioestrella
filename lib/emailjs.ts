type EmailJsTemplateParams = {
  source: string;
  contact_info: string;
  content_title: string;
  content: string;
};

export function isEmailJsConfigured() {
  return Boolean(
    process.env.EMAILJS_SERVICE_ID &&
      process.env.EMAILJS_PUBLIC_KEY &&
      process.env.EMAILJS_PRIVATE_KEY &&
      process.env.EMAILJS_TEMPLATE_ID
  );
}

export async function sendEmailJsEmail(
  templateParams: EmailJsTemplateParams
) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;

  if (!serviceId || !publicKey || !privateKey || !templateId) {
    throw new Error("EmailJS is not configured.");
  }

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: templateParams,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const details = await response.text();

    console.error(
      "EmailJS error:",
      response.status,
      details.slice(0, 1000)
    );

    throw new Error("EmailJS delivery failed.");
  }

  return true;
}