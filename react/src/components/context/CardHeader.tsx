interface CardHeaderPropsType {
    title: string;
    date: string;
  }
  
  export default function CardHeader({ title, date }: CardHeaderPropsType) {
    return (
      <div>
        <h2>{title}</h2>
        <sub>{date}</sub>
      </div>
    );
  }
  