export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Blueprints 3D",
  description: "Reúne a maior quantidade possível de projetos para impressão 3D",
  emoji: "🧊",
  accent: "#f97316",
  upcomingFeatures: [
    {
      title: "Catálogo de projetos",
      description:
        "Navegue por uma grade de projetos com miniatura, autor e dados de impressão.",
    },
    {
      title: "Busca e filtros",
      description:
        "Encontre projetos filtrando por categoria, impressora, material e dificuldade.",
    },
    {
      title: "Envio de projetos",
      description:
        "Publique arquivos STL ou 3MF com fotos e configurações de impressão.",
    },
    {
      title: "Coleções favoritas",
      description:
        "Salve projetos em coleções pessoais para imprimir depois.",
    },
    {
      title: "Visualizador 3D",
      description:
        "Gire e amplie o modelo no navegador antes de baixar o arquivo.",
    },
  ] satisfies Feature[],
};
