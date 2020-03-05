
module.exports = function towelSort (matrix) {
  return (matrix || []).reduce((flatten, el, index) => 
    index % 2 === 0 
      ? flatten.concat(el)
      : flatten.concat([...el].sort((a,b) => b - a))
    , [])
}
