import { FormikProps } from "formik";
import { toast } from "sonner";
type FormValues = {
  subject: string;
  message: string;
  email: string;
  name: string;
};

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
  placeholder: string;
  width: string;
  icon: React.ReactNode;
};

const InputField = ({
  formik,
  fieldName,
  placeholder,
  icon,
  width = "w-full",
}: Props) => {
  return (
    <div className={`flex justify-center ${width}`}>
      <span
        className={`${
          formik.touched[fieldName] && formik.errors[fieldName]
            ? "bg-red-500"
            : "bg-blue-500/50 dark:bg-indigo-900/50"
        } mb-5 flex items-center p-2 rounded-l-sm`}
      >
        {icon}
      </span>
      <input
        {...formik.getFieldProps(fieldName)}
        className={`${
          formik.touched[fieldName] && formik.errors[fieldName]
            ? "border-2 border-red-500  bg-red-400"
            : "bg-blue-500/50 dark:bg-indigo-900/50"
        } dark:text-white focus:outline-none p-4 rounded-r-sm mb-5 w-full px-5 py-3 placeholder-white`}
        placeholder={
          formik.touched[fieldName] && formik.errors[fieldName]
            ? formik.errors[fieldName]
            : placeholder
        }
        onBlur={(e) => {
          formik.handleBlur(e);
          if (formik.errors[fieldName]) {
            return toast.error(formik.errors[fieldName], {
              style: {
                fontSize: "16px",
                color: "red",
              },
            });
          }
        }}
        type="text"
      />
    </div>
  );
};

export default InputField;
