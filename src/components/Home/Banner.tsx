import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Banner() {
  return (
    <section className="h-full flex flex-col justify-center items-center text-center bg-[rgb(0,71,51)] text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-bold leading-tight m-0 p-0 w-auto tracking-tight md:tracking-tighter top-32 z-1 text-center text-[50px] text-[rgb(30,224,127)] md:relative md:top-[72px] lg:top-32 md:p-0 md:text-4xl lg:text-[118px] lg:leading-[1.2]"
      >
        Mortgages
        <br />
        made simple
      </motion.h1>
      <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="text-lg mb-6 pt-36"
>
  Your dream home, within reach. Experience exceptional mortgage services.
</motion.p>
<motion.ul
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
  className="flex flex-col gap-2 mb-6"
>
  <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Competitive Rates</li>
  <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Personalized Solutions</li>
  <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Fast Approvals</li>
</motion.ul>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 1 }}
>
  <Button className="bg-primary hover:bg-secondary transition-all text-lg px-6 py-3 mb-10 rounded-lg">
    Get Started Today
  </Button>
</motion.div>
    </section>
  );
}
