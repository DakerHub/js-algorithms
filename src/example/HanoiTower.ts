import Stack from '../lib/Stack'

export default function hanoiTowerSteps(layers: number): number {
  const stackS = new Stack()
  const stackt = new Stack()
  const stackT = new Stack()
  for (let i = layers; i > 0; i--) {
    stackS.push(i)
  }

  return moveToTarget(layers, stackS, stackt, stackT, 0)
}

function moveToTarget(
  layers: number,
  sourceStack: Stack,
  targetStack: Stack,
  temStack: Stack,
  count: number
): number {
  if (layers === 1) {
    targetStack.push(sourceStack.pop())
    return ++count
  }

  count++
  count = moveToTarget(layers - 1, sourceStack, temStack, targetStack, count)
  targetStack.push(sourceStack.pop())
  return moveToTarget(layers - 1, temStack, targetStack, sourceStack, count)
}
