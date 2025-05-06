import Image from "next/image";

export default function Page() {
    return (
        <div>
            <p>Invoices Page</p>
            <Image src="/hero-mobile.png" alt="Invoices" width={500} height={500} />
        </div>
    )
}