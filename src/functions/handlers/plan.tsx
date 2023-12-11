export const handleCardMenuPlanClick = (cardapio: string, id: number) => {
   const cardapioJSON = {cardapio, id }
   localStorage.setItem('selectedPlan', JSON.stringify(cardapioJSON) );  
 }