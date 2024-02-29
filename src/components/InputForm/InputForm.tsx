
export default function InputForm({ children }: {children: React.ReactNode }) {
    return (
        <section className={`flex flex-col items-center gap-y-4 max-w-lg mx-auto w-full`}>
            {children}
        </section>
    );
}
