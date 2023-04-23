export type Article = {
      id: string;
      brand: string;
      model: string;
      price: number;
      description: string;
      category: {
        id: string;
        name: string;
      };
    };