"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:contact@codehunt.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-12 sm:py-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2  uppercase font-semibold">
              Contact
            </h2>

            <h2 className="text-[42px] font-heading font-semibold tracking-tight">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6 text-lg">
            Have questions about the rounds, rules, or registration? Reach out to our organizing team and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-3 mb-1 items-center">
                <Building2 className="text-primary w-5 h-5" />
                <div className="font-bold text-lg">Event HQ</div>
              </div>

              <div className="text-muted-foreground">Tech Campus Auditorium, Main Wing</div>
            </div>

            <div>
              <div className="flex gap-3 mb-1 items-center">
                <Mail className="text-primary w-5 h-5" />
                <div className="font-bold text-lg">Email Us</div>
              </div>

              <div className="text-muted-foreground">contact@codehunt.com</div>
            </div>

            <div>
              <div className="flex gap-3 mb-1 items-center text-primary">
                <Clock className="w-5 h-5" />
                <div className="font-bold text-lg text-foreground">Support Hours</div>
              </div>

              <div className="text-muted-foreground">
                <div>Monday - Saturday</div>
                <div>9AM - 6PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card border-secondary shadow-lg">
          <CardHeader className="text-primary text-2xl font-bold">Send a Message</CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General Inquiry">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="Registration Issue">
                              Registration Issue
                            </SelectItem>
                            <SelectItem value="Rule Clarification">
                              Rule Clarification
                            </SelectItem>
                            <SelectItem value="Sponsorship">
                              Sponsorship
                            </SelectItem>
                            <SelectItem value="Technical Support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="How can we help you?"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4 w-full text-lg py-6">Send Message</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
