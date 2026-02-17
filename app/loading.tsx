export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-primary-500" />
        <span className="text-sm text-zinc-400">加载中...</span>
      </div>
    </div>
  )
}
