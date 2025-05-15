// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as fs from 'fs';

const directories = ['.next', 'out'];

try {
  directories.forEach(directory => {
    if (fs.existsSync(directory)) {
      fs.rm(directory, { recursive: true }, (error: unknown | null) => {
        if (error) {
          if (error instanceof Error) {
            console.error(`❌ Error during reset of ${directory}:`, error.message);
          } else {
            console.error(`❌ Error during reset of ${directory}:`, 'Unknown error');
          }
        } else {
          console.log(`✅ Reset of ${directory} successful`);
        }
      });
    } else {
      console.log(`❌ The directory ${directory} does not exist`);
    }
  });
} catch (error) {
  if (error instanceof Error) {
    console.error('❌ Error during reset:', error.message);
  } else {
    console.error('❌ Error during reset:', 'Unknown error');
  }
}
