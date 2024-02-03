export default function userProfile({ params }: any) {
  return (
    <div>
      <h1 className="flex items-center justify-center min-h-screen">
        Profile Page
        <span className="text-2xl bg-orange-500 rounded-md p-1 ml-2">
          {params.id}
        </span>
      </h1>
    </div>
  );
}
