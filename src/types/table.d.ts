type Status = { id: number; name: string; color: string }
type TanstackRecord = {
  task: string
  status: Status | null
  due: Date | null
  notes: string
}
