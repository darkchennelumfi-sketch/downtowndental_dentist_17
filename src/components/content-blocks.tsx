import type { ContentBlock } from "@/data/treatments";
import { cn } from "@/lib/utils";

export function ContentBlocks({
  blocks,
  className,
}: {
  blocks: ContentBlock[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={`${block.type}-${index}`}>{block.text}</p>;
        }
        if (block.type === "h3") {
          return (
            <h3 key={`${block.type}-${index}`} className="!mt-8">
              {block.text}
            </h3>
          );
        }
        return (
          <ul key={`${block.type}-${index}`}>
            {block.items.map((item, itemIndex) => {
              const entry = typeof item === "string" ? { text: item } : item;
              return (
                <li key={`${entry.text.slice(0, 24)}-${itemIndex}`}>
                  {entry.label ? (
                    <strong className="font-bold">{entry.label}</strong>
                  ) : null}
                  {entry.label ? " " : ""}
                  {entry.text}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
