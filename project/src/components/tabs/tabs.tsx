import Tab from '../tab/tab';

function Tabs() {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
