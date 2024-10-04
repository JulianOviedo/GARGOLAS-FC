export type New = {
    src: string,
    alt: string,
    title: string,
    description: string;
    isPrimary: boolean;
}

export const newsData:New[] = [
    {
      src: "/images/gargolas-grupal-fem.png",
      alt: "Imagen de ejemplo",
      title: "NOTICIA GARGOLERA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea maxime voluptatum repellendus autem, vel harum facilis ducimus doloribus. Harum laudantium itaque dolore temporibus nostrum qui amet quibusdam, fugiat quis.",
      isPrimary: true,
    },
    {
      src: "/images/gargolas-grupal-masculino.png",
      alt: "Gargolas Futbol",
      title: "Piel Nueva!",
      description: "Descripción de la primera noticia.",
      isPrimary: false,
    },
    {
      src: "/images/gargolas-grupal-masculino.png",
      alt: "Gargolas Futbol",
      title: "NOTICIA 2",
      description: "Descripción de la segunda noticia.",
      isPrimary: false,
    },
  ];
  