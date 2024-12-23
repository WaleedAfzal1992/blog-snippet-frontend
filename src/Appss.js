import React from 'react';
import BlogArticles from './components/BlogArticles';

const App = () => {
  const articleContent = `
This is a simple blog article. You can write normal text here.

\`\`\`javascript
const greet = () => {
  console.log('Hello, world!');
};
greet();
\`\`\`

And you can also add other code blocks in different languages like Python:

\`\`\`python
def greet():
    print('Hello, world!')

greet()
\`\`\`
Django installing requirements
\`\`\`python
pip3 install Django
pip3 install djangorestframework
pip3 install djangorestframework-simplejwt
pip3 install django-cors-headers
sudo apt install pkg-config libmysqlclient-dev
pip install mysqlclient
pip install pymysql
pip install tzdata
pip install django gunicorn
\`\`\`
`;

  return (
    <div className="App">
      <BlogArticles title="My First Blog Article" content={articleContent} />
    </div>
  );
};

export default App;
