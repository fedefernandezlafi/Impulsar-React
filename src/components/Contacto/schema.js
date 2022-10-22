import * as Yup from 'yup'

export const schema = Yup.object().shape({
        nombre: Yup.string()
                        .required("Este campo es obligatorio")
                        .min(3,"El nombre es demasiado corto")
                        .max(30, "Máximo 30 caracteres"),
        email: Yup.string()
                        .required("Este campo es obligatorio")
                        .email("Email inválido"),
        telefono: Yup.number()
                        .required("Este campo es obligatorio")
                        .min(10,"El número es demasiado corta"),
        message: Yup.string()
                        .required("Este campo es obligatorio")
                        .min(10, "El mensaje es muy corto"),               
})