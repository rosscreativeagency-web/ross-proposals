import { cn } from "@/lib/utils";
import { rossRadii } from "@/lib/design-tokens";

type RossBlobProps = {
  className?: string;
  variant?: "default" | "alt";
};

export function RossBlob({ className, variant = "default" }: RossBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{
        borderRadius:
          variant === "alt" ? rossRadii.blobAlt : rossRadii.blob,
      }}
    />
  );
}
