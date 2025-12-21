export default function ReviewsSection({ reviews }) {
  return (
    <section className="border-t pt-10">
      <h3 className="text-2xl font-bold mb-8">Customer Reviews</h3>

      <div className="flex flex-col lg:flex-row gap-10">

        <div className="lg:w-1/3 bg-[#f9fcf8] border rounded-xl p-6">
          <div className="text-center mb-6">
            {/* <div className="text-5xl font-black">{reviews.summary.rating}</div> */}
            {/* <p className="text-sm">Based on {reviews.summary.total} reviews</p> */}
          </div>

          {/* {reviews.summary.distribution.map((d) => (
            <div key={d.star} className="flex gap-3 text-sm mb-2">
              <span className="w-8 text-right">{d.star}</span>
              <div className="flex-1 h-2 bg-[#eaf3e7] rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: `${d.percent}%` }} />
              </div>
              <span>{d.percent}%</span>
            </div>
          ))} */}
        </div>

        <div className="lg:w-2/3 space-y-6">
          {reviews.list.map((r, i) => (
            <div key={i} className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <div className="size-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-xs">
                    {r.initials}
                  </div>
                  <span className="font-bold">{r.name}</span>
                </div>
                <span className="text-xs">{r.time}</span>
              </div>

              <h5 className="font-bold text-sm">{r.title}</h5>
              <p className="text-sm">{r.comment}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
