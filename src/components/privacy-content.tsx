import type { PrivacyBlock } from "@/data/pages";

export function PrivacyContent({ blocks }: { blocks: PrivacyBlock[] }) {
  return (
    <>
      {blocks.map((block, blockIndex) => {
        if (block.type === "p") {
          return <p key={`privacy-p-${blockIndex}`}>{block.text}</p>;
        }

        return (
          <ul key={`privacy-list-${blockIndex}`}>
            {block.items.map((item, itemIndex) => (
              <li key={`privacy-item-${blockIndex}-${itemIndex}`}>
                {item.text}
                {item.children && item.children.length > 0 ? (
                  <div className="mt-3 space-y-3">
                    <PrivacyContent blocks={item.children} />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        );
      })}
    </>
  );
}
