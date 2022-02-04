function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + process.env.USER + + 'from' + args["run_env"] + 'env!'
    console.log(greeting)
    return {"body": greeting}
  }
