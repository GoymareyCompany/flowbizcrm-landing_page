interface FlowbizIconProps {
  compact?: boolean;
}

export function FlowbizIcon({ compact }: FlowbizIconProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-primary flex size-8 lg:size-10 items-center justify-center rounded-lg">
        <div className="bg-base-100 size-4 lg:size-6 rounded-full" />
      </div>
      {!compact && (
        <span className="line-clamp-1 lg:text-2xl font-bold whitespace-nowrap">
          Flowbiz CRM
        </span>
      )}
    </div>
  );
}
