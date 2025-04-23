export function filterItems(items,query){
    query = query.toLowerCase();
    return items.filter(item=>item.name.split(' ').some(word=>word.toLowerCase().startsWith(query))
)
}

export const foods = [{
    id:0,
    name:'sushi',
    description:'sushi is a traditional japanese dish of rice'
},{
    id:1,
    name:'dal',
    description:'The most common way of preparing dal is the form of a soup to which onions, tomatoes and various spices be added'
},{
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
  
},{
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
  },{
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
  }
]