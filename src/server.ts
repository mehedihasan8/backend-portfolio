import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import seedUser from './app/DB';

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    seedUser();
    server = app.listen(config.port, () => {
      console.log(
        `mehedi hasan foysal protfolio is listening on port ${config.port}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();

// for asynchronous error rejection
process.on('unhandledRejection', () => {
  console.log(`😈 unhandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// for synchronous error rejection
process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
