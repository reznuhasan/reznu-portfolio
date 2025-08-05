import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const form = new FormData(formRef.current);
        const data = {
            user_name: form.get("user_name"),
            user_email: form.get("user_email"),
            subject: form.get("subject"),
            message: form.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                formRef.current.reset();
            } else {
                const { error } = await res.json();
                console.error(error);
                setStatus("Failed to send. Try again.");
            }
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong.");
        }
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name (required)</label>
                <Input name="user_name" placeholder="Full name" className="border-gray-300" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email (required)</label>
                <Input type="email" name="user_email" placeholder="Email address" className="border-gray-300" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject (required)</label>
                <Input name="subject" placeholder="Subject" className="border-gray-300" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comment (required)</label>
                <Textarea name="message" placeholder="Type comment" rows={4} className="border-gray-300" required />
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" required id="robot" className="rounded" />
                <label htmlFor="robot" className="text-sm text-gray-700">I'm not a robot</label>
            </div>
            <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3">
                Contact Me
            </Button>

            {status && <p className="text-sm text-center text-gray-700">{status}</p>}
        </form>
    );
}
