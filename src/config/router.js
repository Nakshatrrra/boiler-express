import authRouter from '@/routes/auth';
import indexRouter from '@/routes/index';
import tweetRouter from '@/routes/tweet';
import destinationRouter from '@/routes/tirth_destination';
import templesRouter from '@/routes/tirth_temples';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);
  app.use('/tweets', tweetRouter);
  app.use('/destination', destinationRouter);
  app.use('/temples', templesRouter);
}
