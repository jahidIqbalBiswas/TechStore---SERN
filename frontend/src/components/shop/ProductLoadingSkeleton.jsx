import LoadingSkeleton from "../common/LoadingSkeleton";

export default function ProductLoadingSkeleton({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingSkeleton key={i} />
      ))}
    </>
  );
}
