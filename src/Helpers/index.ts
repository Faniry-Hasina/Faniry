export const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}... ` : text;
  };
export const formatPrice = (price:any)=>{
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(
        price,
      )
}