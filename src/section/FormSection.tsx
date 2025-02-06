import React, { useState } from "react";
import { formItens } from "../constants/formItens";
import { maskCPF, maskPhone, maskYear } from "../utils/masks";
import "../App.css";
import "../styles/FormStyle.css";
import { sendFormData } from "../services/apiForm";
import { showErrorToast, showSuccessToast } from "../utils/toast";

interface FormData {
  [key: string]: string | boolean;
}

const requiredFields = [
  "name",
  "cpf",
  "email",
  "phone",
  "shipCategory",
  "shipValue",
  "hasRecommended",
];

const Formulario = () => {
  const [formData, setFormData] = useState<FormData>(
    formItens.reduce((acc, item) => {
      acc[item.value] = item.type === "checkbox" ? false : "";
      return acc;
    }, {} as FormData)
  );

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false); // Estado do loading

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    let formattedValue = value;
    if (name === "cpf") {
      formattedValue = maskCPF(value);
    } else if (name === "phone") {
      formattedValue = maskPhone(value);
    } else if (name === "shipYear") {
      formattedValue = maskYear(value);
    }

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : formattedValue,
    });

    if (requiredFields.includes(name)) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: !value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Inicia o loading

    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await sendFormData(formData);

        if (response != null) {
          showSuccessToast("E-mail enviado com sucesso!");
        } else {
          showErrorToast("Ocorreu um erro ao enviar o e-mail.");
        }
      } catch (error) {
        showErrorToast("Erro inesperado ao enviar o formulário.");
      }
    }

    setIsLoading(false); // Finaliza o loading
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="form-title">Formulário de Cadastro</h1>
        {formItens.map((item) => (
          <div key={item.value} className="form-group">
            <label>
              {item.title.includes("*") ? (
                <>
                  {item.title.replace("*", "")}{" "}
                  <span style={{ color: "#83092b" }}>*</span>
                </>
              ) : (
                item.title
              )}
            </label>

            {item.type === "checkbox" ? (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name={item.value}
                  checked={formData[item.value] as boolean}
                  onChange={handleChange}
                />
              </label>
            ) : item.type === "select" ? (
              <select
                name={item.value}
                value={formData[item.value] as string}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                {item.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={item.type}
                name={item.value}
                placeholder={item.placeHolder}
                value={formData[item.value] as string}
                onChange={handleChange}
                className={errors[item.value] ? "input-error" : ""}
              />
            )}
            {errors[item.value] && (
              <span className="error-text">Este campo é obrigatório</span>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
