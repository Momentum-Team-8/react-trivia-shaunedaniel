import axios from 'axios'

export function getCategoryList () {
  return (
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => (res.data.trivia_categories))
  )
}

export function getQuestionsByCategory (category) {
  return (
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${category.id}&type=multiple`)
      .then((res) => (res.data.results))
  )
}
