export default function InitiativesTransition() {
  return (
    <div className="py-12 lg:py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p
          className="font-display font-bold"
          style={{
            fontSize: "clamp(1.5rem, 3.8vw, 3rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            color: "white",
          }}
        >
          None of this happens alone —{" "}
          <span className="text-primary">it takes organisations who believe in the same future.</span>
        </p>
      </div>
    </div>
  );
}
