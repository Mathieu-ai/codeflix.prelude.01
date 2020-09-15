function length(string = '') {
  let x = 0

  for (let i in string)
    x++

  return x
}

length('ch0pper')
