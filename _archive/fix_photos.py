import os
import glob
import re

root = r'C:\Users\ADMIN\OneDrive\Desktop\aventara\src'
files = glob.glob(root + '/**/*.jsx', recursive=True) + glob.glob(root + '/**/*.js', recursive=True)

flamingos = ['flamingo-lonely.jpeg', 'flamingo-water.jpeg', 'flamingo.jpeg']
flamingo_used = 0

photos = [
    'cheater.jpeg', 'cheater_plain.jpeg', 'egret-water.jpeg', 'elefabt-happy.jpeg',
    'elefant-tusk.jpeg', 'elefant-vegetation.jpeg', 'elefant.jpeg', 'elefpalin.jpeg',
    'elephant.jpeg', 'elephtain.jpeg', 'flamingo-lonely.jpeg', 'flamingo-water.jpeg',
    'flamingo.jpeg', 'leapard-car.jpeg', 'lion pack.jpeg', 'lion-lonely.jpeg',
    'lion.jpeg', 'lioness.jpeg', 'lioness_open.jpeg', 'mountain.jpeg',
    'nairobi/antelppes.jpeg', 'nairobi/bird-exotic.jpeg', 'nairobi/girafe-nairobi-city.jpeg',
    'nairobi/giraffe-sunsut.jpeg', 'nairobi/girfe-sunset.jpeg', 'nairobi/lion-safari-van.jpeg',
    'nairobi/lion-safari.jpeg', 'nairobi/sunset-exotic.jpeg', 'plain_elefabt.jpeg',
    'rhino.jpeg', 'rhino_plain.jpeg', 'safari-van-sunrise.jpeg', 'treecheta.jpeg',
    'wildbeasts.jpg'
]

photo_idx = 0

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        global photo_idx, flamingo_used
        var_name = match.group(1)
        prefix = match.group(2)
        old_val = match.group(3)
        
        # skip svg and Home bento images
        if old_val.lower().endswith('.svg'):
            return match.group(0)
            
        if 'Home.jsx' in filepath and (var_name == 'wildImg' or var_name == 'heroImg'):
            return match.group(0)

        photo_to_use = ''
        if 'flamingo' in var_name.lower() or 'nakuru' in filepath.lower() or 'naivasha' in filepath.lower() or 'flamingo' in old_val.lower():
            if flamingo_used < len(flamingos):
                photo_to_use = flamingos[flamingo_used]
                flamingo_used += 1
            else:
                photo_to_use = flamingos[-1]
        else:
            # find a normal photo that is NOT a flamingo
            while photo_idx < len(photos) and photos[photo_idx] in flamingos:
                photo_idx += 1
            if photo_idx < len(photos):
                photo_to_use = photos[photo_idx]
                photo_idx += 1
            else:
                photo_to_use = photos[-1]

        return f'import {var_name} from "{prefix}{photo_to_use}";'

    new_content = re.sub(
        r'import\s+(\w+)\s+from\s+[\'"]((?:\.\./)+assets/)(.*?)[\'"];*',
        replacer,
        content
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            print(f"Updated {os.path.basename(filepath)}")

print(f"Used {photo_idx} standard photos and {flamingo_used} flamingo photos.")
