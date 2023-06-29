import { motion } from "framer-motion";
type Props = {};

const Home = (props: Props) => {
  return (
    <section
      id="home"
      className=""
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >

      </motion.div>
    </section>
  );
};

export default Home;
