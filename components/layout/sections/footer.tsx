import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-12 sm:py-16">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Code Hunt</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="https://chat.whatsapp.com/DkimJc5mRUhBi6vqv5aysD?mode=gi_t" target="_blank" className="opacity-60 hover:opacity-100">
                WhatsApp
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div>
              <Link href="#quizzes" className="opacity-60 hover:opacity-100">
                Quizzes
              </Link>
            </div>

            <div>
              <Link href="#timeline" className="opacity-60 hover:opacity-100">
                Timeline
              </Link>
            </div>

            <div>
              <Link href="#rules" className="opacity-60 hover:opacity-100">
                Rules
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2026 Designed and developed by
            <Link
              target="_blank"
              href="#"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Team Code Hunt
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
