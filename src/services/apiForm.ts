import emailjs from "@emailjs/browser";

export const sendFormData = async (formData: any) => {
  try {
    const serviceId = "service_anjv33e";
    const templateId = "template_toz5a7p";
    const publicKey = "GzyxRGXvVLHhbVXsw";

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

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return null;
  }
};
