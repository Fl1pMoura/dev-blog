import { Check, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [shared, setShared] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(!!navigator.share);
  }, []);

  const handleShare = async () => {
    if (canShare) {
      try {
        await navigator.share({
          title,
          url,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
        toast.error("Não foi possível compartilhar o conteúdo");
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência!");
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (error) {
        console.error("Erro ao copiar:", error);
        toast.error("Não foi possível copiar o link");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
    >
      {shared ? (
        <>
          <Check size={20} className="text-green-500" />
          <span>{canShare ? "Compartilhado!" : "Link copiado!"}</span>
        </>
      ) : (
        <>
          <Share2 size={20} />
          <span>{canShare ? "Compartilhar" : "Copiar link"}</span>
        </>
      )}
    </button>
  );
}
