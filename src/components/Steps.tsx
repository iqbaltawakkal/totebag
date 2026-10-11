import { stepsSection } from "@/content/copy";

export function Steps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {stepsSection.steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 rounded-2xl bg-white p-5 lg:flex-col">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-lg font-bold text-white"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="font-bold">
              <span className="sr-only">Langkah {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-1 text-muted">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
