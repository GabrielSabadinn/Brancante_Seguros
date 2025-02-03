import emailjs from "@emailjs/browser";

export const sendFormData = async (formData: any) => {
  try {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      cpf: formData.cpf,
      email: formData.email,
      phone: formData.phone,
      shipCategory: formData.shipCategory?.label || "N/A",
      shipModel: formData.shipModel || "N/A",
      shipYear: formData.shipYear || "N/A",
      shipEnginePower: formData.shipEnginePower || "N/A",
      shipValue: formData.shipValue,
      isShared: formData.isShared ? "Sim" : "Não",
      shipName: formData.shipName || "N/A",
      marineName: formData.marineName,
      hasInsurance: formData.hasInsurance ? "Sim" : "Não",
      hasRecommended: formData.hasRecommended,
      termsAccepted: formData.termsAccepted ? "Sim" : "Não",
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    // alert("E-mail enviado com sucesso!");

    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    // alert("Erro ao enviar o e-mail. Tente novamente.");
    return null;
  }
};
