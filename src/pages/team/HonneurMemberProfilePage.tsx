import { useLanguage } from '@/contexts/LanguageContext';
import { membresHonneurData } from '@/data/membresHonneurData';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const HonneurMemberProfilePage = () => {
  const { language, t } = useLanguage();
  return (
    <GenericMemberProfilePage
      members={membresHonneurData[language]}
      backPath="/team/membres-honneur"
      backLabel={t('team.cat.honneur')}
    />
  );
};

export default HonneurMemberProfilePage;
