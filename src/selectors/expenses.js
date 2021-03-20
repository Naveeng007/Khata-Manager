import moment from'moment'
// Get visible expenses..give any name to this function when importing as it is default
export default (expenses, { text, sortBy, startDate, endDate }) => {
    // console.log('Sortby',sortBy)
    // console.log(expenses)
    
    return expenses.filter((expense) => {
      const createdAtMoment=moment(expense.createdAt)
      const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true
      const endDateMatch = endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        // console.log(a.createdAt,b.createdAt)
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        
        // console.log(a.Amount,b.Amount);
        return a.Amount < b.Amount ? 1 : -1;//it was amount before
      }
    });
    // console.log(test);
    // return test;
  };
  