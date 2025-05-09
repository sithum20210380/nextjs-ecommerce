import { NextResponse } from "next/server"
import type { ContactFormData } from "@/lib/types"

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate form data
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a real application, you would send an email here
    // For this example, we'll just log the data and return a success response
    console.log("Contact form submission:", data)

    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
