import { motionDivProps } from "@/shared/config";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IContacme, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Subtitle from "../Subtitle";
import Persona from "@/assets/persona.jpeg";
import { sendEmail } from "@/shared/email";
import { BsFillFilePersonFill, BsFileTextFill } from "react-icons/bs";
import { MdAlternateEmail, MdTitle } from "react-icons/md";
import InputField from "../InputField";
import { toast } from "sonner";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  contactme: IContacme;
};

const ContactMe = ({ setSelectedPage, contactme }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(contactme.errors.name),
    email: Yup.string()
      .email(contactme.errors.email)
      .required(contactme.errors.email),
    subject: Yup.string().required(contactme.errors.subject),
    message: Yup.string()
      .required(contactme.errors.message)
      .min(10, contactme.errors.minmessage),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    { resetForm }: { resetForm: any }
  ) {
    try {
      sendEmail({ ...values });
      resetForm();
    } catch (error) {
      toast.error(contactme.errors.error);
    }
  }
  return (
    <section id="contactme" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        <motion.div className="md:w-3/5" {...motionDivProps}>
          <Subtitle>{contactme.title}</Subtitle>
          <p className="my-5">{contactme.description}</p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0" {...motionDivProps}>
            <form onSubmit={formik.handleSubmit}>
              <InputField
                formik={formik}
                fieldName="name"
                placeholder={contactme.name}
                icon={
                  <BsFillFilePersonFill
                    size={28}
                    className={`${
                      !formik.errors.name && formik.values.name
                        ? "fill-blue-400"
                        : "fill-white"
                    }`}
                  />
                }
                width="w-full"
              />
              <InputField
                formik={formik}
                fieldName="email"
                placeholder={contactme.email}
                icon={
                  <MdAlternateEmail
                    size={28}
                    className={`${
                      !formik.errors.email && formik.values.email
                        ? "fill-blue-400"
                        : "fill-white"
                    }`}
                  />
                }
                width="w-full"
              />
              <InputField
                formik={formik}
                fieldName="subject"
                placeholder={contactme.subject}
                icon={
                  <MdTitle
                    size={28}
                    className={`${
                      !formik.errors.subject && formik.values.subject
                        ? "fill-blue-400"
                        : "fill-white"
                    }`}
                  />
                }
                width="w-full"
              />
              <div className={`flex justify-center w-full`}>
                <span
                  className={`${
                    formik.touched.message && formik.errors.message
                      ? "bg-red-500"
                      : "bg-blue-500/50 dark:bg-indigo-900/50"
                  } mb-5 flex items-center p-2 rounded-l-sm`}
                >
                  <BsFileTextFill
                    size={28}
                    className={`${
                      !formik.errors.message && formik.values.message
                        ? "fill-blue-400"
                        : "fill-white"
                    }`}
                  />
                </span>
                <textarea
                  rows={4}
                  cols={50}
                  {...formik.getFieldProps("message")}
                  className={`${
                    formik.touched.message && formik.errors.message
                      ? "border-2 border-red-500  bg-red-400"
                      : "bg-blue-500/50 dark:bg-indigo-900/50"
                  } dark:text-white focus:outline-none p-4 rounded-r-sm mb-5 w-full px-5 py-3 placeholder-white min-h-[100px] max-h-[220px]`}
                  placeholder={
                    formik.touched.message && formik.errors.message
                      ? formik.errors.message
                      : contactme.message
                  }
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    if (formik.errors.message) {
                      return toast.error(formik.errors.message, {
                        style: {
                          fontSize: "16px",
                          color: "red",
                        },
                      });
                    }
                  }}
                />
              </div>
              <button
                type="submit"
                className="mt-5 rounded-lg bg-blue-600/50 hover:bg-blue-600/70 dark:bg-blue-500/50 dark:hover:bg-blue-500/70 px-20 py-3 transition duration-500 text-white"
              >
                ENVIAR
              </button>
            </form>
          </motion.div>

          <motion.div
            className="flex justify-center items-center relative mt-16 basis-2/5 md:mt-0"
            {...motionDivProps}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <Image
                className="w-full"
                alt="contact-us-page-graphic"
                src={Persona}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
