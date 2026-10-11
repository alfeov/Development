class Order {
  constructor(task) {
    this.task = task
    this.task.status = 'accepted'
  }

  static createOrder(task) {
    const oTask = new Order(task)
    console.log(task.status)
    setTimeout(() => {
      KitchenTask.createTask(oTask.task)
    }, 3000)
  }
}

class KitchenTask {
  constructor(task) {
    this.task = task
    this.task.status = 'start cooking'
  }

  static createTask(task) {
    const kTask = new KitchenTask(task)
    console.log(task.status)
    setTimeout(() => {
      DeliveryTask.createTask(kTask.task)
    }, 3000)
  }
}

class DeliveryTask {
  constructor(task) {
    this.task = task
    this.task.status = 'in delivery'
  }

  static createTask(task) {
    const dTask = new DeliveryTask(task)
    console.log(task.status)
    setTimeout(() => {
      dTask.task.status = 'completed'
      console.log(task.status)
    }, 3000)
  }
}
