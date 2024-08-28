const Card = (props) => {
  const { img, name, summary, languages } = props;

  return (
    <div className="flex flex-wrap rounded-xl desktop:grid desktop:grid-cols-2">
      <div className="mobile:p-8 desktop:p-12">
        <div
          className="h-[192px] flex-auto bg-cover bg-center bg-no-repeat tablet:h-[100%]"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
      <div className="grid grid-rows-2 gap-6 mobile:p-8 desktop:p-12">
        <p className="text-lg font-semibold text-grey-900">{name}</p>
        <p className="text-base font-normal text-grey-600">{summary}</p>
        <div className="flex flex-wrap gap-[10]">{languages}</div>
        <img src="/images/Work/Share.svg" />
      </div>
    </div>
  );
};
<section body className="flex flex-wrap gap-6">
    {NoWorkResult.map ((work,index)=> return 
    <Card (
        key={index}
        img={work.img}
        name={work.name}
        summary={work.summary}
        language= {work.language.map((laneguage,index)=>
            return <Con text={language} key={index} /> {}
         } )} />
    ) }
</section>
