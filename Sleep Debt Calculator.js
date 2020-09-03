const getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 6;
      break;
      case 'thirsday':
      return 5;
      break;
      case 'friday':
      return 4;
      break;
      case 'saterday':
      return 3;
      break;
      case 'sunday':
      return 2;
      break;
      default:
      return 'Please enter day of week.';
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thirsday') + getSleepHours('friday') + getSleepHours('saterday') + getSleepHours('sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('The user got the perfect amount of sleep');
    }
  
    if (actualSleepHours > idealSleepHours) {
      console.log('The user got more sleep than needed');
      console.log('The user is ' + (actualSleepHours - idealSleepHours) + ' over their ideal sleep');
    }
  
    if (actualSleepHours < idealSleepHours) {
      console.log('The user should get some rest');
      console.log('The user is ' + (idealSleepHours - actualSleepHours) + ' under their ideal sleep');
    }
  }
  
  calculateSleepDebt();