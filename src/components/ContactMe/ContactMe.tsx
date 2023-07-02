import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const ContactMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactme" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        ContactMe
      </motion.div>
    </section>
  );
};

export default ContactMe;
