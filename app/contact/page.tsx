import ContactForm from "@/components/contact-form"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
      <p className="text-gray-500 text-center mb-8">
        Have questions about our products? Fill out the form below and we'll get back to you.
      </p>

      <Separator className="my-6" />

      <ContactForm />
    </main>
  )
}
